# Generated by Django 5.1.2 on 2024-11-06 13:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0007_customers_alter_features_options'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='texts',
            name='artistname',
        ),
        migrations.RemoveField(
            model_name='texts',
            name='photourl',
        ),
    ]