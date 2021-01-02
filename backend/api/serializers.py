from rest_framework import serializers
from .models import Citas, Cliente, Paciente

class CitasHoySerializer(serializers.ModelSerializer):
    class Meta:
        model = Citas
        fields = ['id', 'paciente']

class CitasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Citas
        fields = ['id', 'paciente', 'motivo_visita', 'fecha_visita']

class ClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['propietario', 'domicilio', 'colonia', 'email']

class PacientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = ['nombre', 'fecha_nacimiento', 'edad', 'especie', 'raza', 'color', 'sexo', 'esterilizado', 'motivo_visita', 'recordar_cita', 'medio']