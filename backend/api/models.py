from tastypie.resources import ModelResource
from tastypie.resources import Resource
from tastypie.exceptions import ImmediateHttpResponse
from tastypie.authorization import Authorization
import requests
from django.conf import settings
from tastypie.http import HttpBadRequest, HttpApplicationError, HttpCreated
from django.db import connection
from django.http import JsonResponse


from shop.models import Clients, Instruments, Requests, Schedule, Texts

class TelegramMessageResource(Resource):
    class Meta:
        resource_name = 'send-message'
        allowed_methods = ['post']
        authorization = Authorization()

    def obj_create(self, bundle, **kwargs):
        message = bundle.data.get('message')

        if not message:
            raise ImmediateHttpResponse(
                self.create_response(bundle.request, {'error': 'No message provided'}, HttpBadRequest)
            )

        try:
            response = requests.post(
                f'https://api.telegram.org/bot{settings.BOT_TOKEN}/sendMessage',
                json={
                    'chat_id': settings.CHAT_ID,
                    'text': message,
                }
            )
            
            response.raise_for_status()
            bundle.data['success'] = 'Message sent successfully'
            raise ImmediateHttpResponse(self.create_response(bundle.request, bundle, response_class=HttpCreated))
           
        except requests.RequestException as e:
            raise ImmediateHttpResponse(
                self.create_response(
                    bundle.request,
                    {'error': f'Failed to send message: {str(e)}'},
                    HttpApplicationError
                )
            )


class ClientsResource(ModelResource):
    class Meta:
        queryset = Clients.objects.all()
        resource_name = 'clients'
        allowed_methods = ["get"]
        
        
class TextsResource(ModelResource):
    class Meta:
        queryset = Texts.objects.all()
        resource_name = 'texts'
        allowed_methods = ["get"]
 