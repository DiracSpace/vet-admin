# Generated by Django 3.1.3 on 2021-01-02 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20210101_1638'),
    ]

    operations = [
        migrations.AlterField(
            model_name='citas',
            name='fecha_visita',
            field=models.DateField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='fecha_nacimiento',
            field=models.DateField(blank=True, max_length=30, null=True),
        ),
    ]
