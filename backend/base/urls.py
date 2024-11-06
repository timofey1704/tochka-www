"""
URL configuration for base project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from tastypie.api import Api
from api.models import TelegramMessageResource, ClientsResource, TextsResource, InstrumentsResource

#! подключаем эндпоинты
api = Api(api_name='v1')
send_message_resource = TelegramMessageResource() #api/v1/send-message
clients_resource = ClientsResource() #api/v1/clients
texts_resource = TextsResource() #api/v1/texts
instruments_resource = InstrumentsResource() #api/v1/instruments

api.register(send_message_resource)
api.register(clients_resource)
api.register(texts_resource)
api.register(instruments_resource)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(api.urls))
]

if settings.DEBUG:
    urlpatterns+= static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)