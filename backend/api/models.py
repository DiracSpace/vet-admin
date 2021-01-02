from django.contrib.auth.models import User
from django.db import models

class Cliente(models.Model):
    propietario = models.CharField(max_length=200, null=False, blank=False)
    domicilio = models.CharField(max_length=200, null=False, blank=False)
    colonia = models.CharField(max_length=200, null=False, blank=False)
    email = models.EmailField(max_length=254, null=False, unique=True, blank=False)

class Paciente(models.Model):
    propietario = models.ForeignKey(Cliente, on_delete=models.CASCADE, null=True, blank=True)
    nombre = models.CharField(max_length=200, null=False)
    fecha_nacimiento = models.DateField(max_length=30, null=True, blank=True)
    edad = models.CharField(max_length=100, null=False, blank=True)
    especie = models.CharField(max_length=30, null=False, blank=True)
    raza = models.CharField(max_length=200, null=False, blank=True)
    color = models.CharField(max_length=200, null=False, blank=True)
    sexo = models.CharField(max_length=20, null=False, blank=True)
    esterilizado = models.BooleanField(default=False, null=False, blank=True)
    motivo_visita = models.CharField(max_length=300, null=False, blank=True)
    recordar_cita = models.BooleanField(default=False, null=False, blank=True)
    medio = models.CharField(max_length=200, null=False, blank=True)

class Citas(models.Model):
    paciente = models.CharField(max_length=200, null=False)
    motivo_visita = models.CharField(max_length=300, null=False, blank=True)
    fecha_visita = models.DateField(max_length=30, null=True, blank=True)