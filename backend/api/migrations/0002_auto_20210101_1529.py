# Generated by Django 3.1.3 on 2021-01-01 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='propietario',
            field=models.CharField(max_length=200),
        ),
    ]
