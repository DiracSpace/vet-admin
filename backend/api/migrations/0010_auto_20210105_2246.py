# Generated by Django 3.1.3 on 2021-01-06 04:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20210105_2239'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paciente',
            name='especie',
            field=models.CharField(blank=True, choices=[('Canino', 'Canino'), ('Felino', 'Felino')], max_length=8),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='sexo',
            field=models.CharField(blank=True, choices=[('hembra', 'hembra'), ('macho', 'macho')], max_length=8),
        ),
    ]
