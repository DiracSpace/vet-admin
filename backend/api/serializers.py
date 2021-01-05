from .models import Citas, Cliente, Paciente
from rest_framework import serializers

class CitasHoySerializer(serializers.ModelSerializer):
    class Meta:
        model = Citas
        fields = ['id', 'paciente']

class CitasSerializer(serializers.ModelSerializer):
    paciente = serializers.CharField()
    motivo_visita = serializers.CharField()
    fecha_visita = serializers.DateField()

    class Meta:
        model = Citas
        fields = ['id', 'paciente', 'motivo_visita', 'fecha_visita']

class ClientesListaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id', 'propietario', 'email']

class ClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['propietario', 'domicilio', 'colonia', 'email']

class PacientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = ['nombre', 'fecha_nacimiento', 'edad', 'especie', 'raza', 'color', 'sexo', 'esterilizado', 'motivo_visita', 'recordar_cita', 'medio']