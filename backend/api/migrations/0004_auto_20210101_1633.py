# Generated by Django 3.1.3 on 2021-01-01 22:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_paciente_propietario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='citas',
            name='fecha_visita',
            field=models.DateTimeField(auto_now_add=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='fecha_nacimiento',
            field=models.DateTimeField(blank=True, max_length=30),
        ),
    ]