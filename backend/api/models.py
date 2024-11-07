from tastypie.resources import ModelResource
from tastypie.resources import Resource
from tastypie.exceptions import ImmediateHttpResponse
from tastypie.authorization import Authorization
import requests
from django.conf import settings
from tastypie.http import HttpBadRequest, HttpApplicationError, HttpCreated
from shop.models import Clients, Instruments, Texts, Customers, InstrumentListing
from django.db import connection
from django.http import JsonResponse

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

class CustomersResource(ModelResource):
    class Meta:
        queryset = Customers.objects.all()
        resource_name = 'customers'
        allowed_methods = ["get"]
 
class InstrumentsResource(ModelResource):
    class Meta:
        queryset = Instruments.objects.all()
        resource_name = 'instruments'
        allowed_methods = ["get"]
    
    def get_list(self, request, **kwargs):
        sql_query = """
        SELECT 
            shop_instruments.id,
            shop_instruments.title,
            shop_instruments.img_url,
            shop_instruments.description,
            shop_instruments.link,
            shop_instruments.price,
            shop_features.feature
        FROM 
            shop_instruments 
        LEFT JOIN 
            shop_features ON shop_instruments.id = shop_features.instrument_id_id;
        """
        
        with connection.cursor() as cursor:
            cursor.execute(sql_query)
            rows = cursor.fetchall()
            
            instruments = {}
            for row in rows:
                instrument_id = row[0]
                title = row[1]
                img_url = row[2]
                description = row[3]
                link = row[4]
                price = row[5]
                feature = row[6]                
               
                if instrument_id not in instruments:
                    instruments[instrument_id] = {
                        "id": instrument_id,
                        "title": title,
                        "img_url": img_url,
                        "description": description,
                        "link": link,
                        "price": price,
                        "features": []
                    }
                
                if feature is not None:
                    instruments[instrument_id]["features"].append(feature)

        data = list(instruments.values())
        return JsonResponse(data, safe=False)
    
class ListingResource(ModelResource):
    class Meta:
        queryset = InstrumentListing.objects.all()
        resource_name = 'listing'
        allowed_methods = ["get"]