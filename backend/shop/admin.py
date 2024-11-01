from django.contrib import admin
from . import models

admin.site.register(models.Clients)
admin.site.register(models.Instruments)
admin.site.register(models.Requests)
admin.site.register(models.Schedule)
admin.site.register(models.Texts)