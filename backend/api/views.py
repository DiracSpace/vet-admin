from api.serializers import CitasSerializer, PacientesSerializer, ClientesSerializer, CitasHoySerializer
from api.serializers import PacientesListaSerializer, ClientesListaSerializer
from .models import Citas, Paciente, Cliente
from rest_framework.response import Response
from rest_framework import viewsets
from datetime import date
import json

today = date.today()

class CitasViewSet(viewsets.ModelViewSet):
    queryset = Citas.objects.all()
    serializer_class = CitasSerializer
    
    def list(self, request, *args, **kwargs):
        id_queryset = Citas.objects.all().filter(fecha_visita__year=today.year, fecha_visita__month=today.month, fecha_visita__day=today.day)
        serializer = CitasHoySerializer(id_queryset, many=True)
        return Response(serializer.data)

class PacientesViewSet(viewsets.ModelViewSet):
    queryset = Paciente.objects.all()
    serializer_class = PacientesSerializer

    def list(self, request, *args, **kwargs):
        client_id = request.GET.get('propietario')
        id_querset = Paciente.objects.all().filter(propietario=client_id)
        serializer = PacientesListaSerializer(id_querset, many=True)
        return Response(serializer.data)

class ClientesViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClientesSerializer

    def list(self, request, *args, **kwargs):
        id_queryset = Cliente.objects.all()
        serializer = ClientesListaSerializer(id_queryset, many=True)
        return Response(serializer.data)