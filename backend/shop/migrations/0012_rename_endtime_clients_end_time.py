# Generated by Django 5.1.2 on 2024-11-13 14:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0011_rename_img_url_clients_telegram_id_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='clients',
            old_name='endTime',
            new_name='end_time',
        ),
    ]
