from tastypie.authentication import Authentication
from tastypie.exceptions import ImmediateHttpResponse
from django.conf import settings
from tastypie.http import HttpUnauthorized

class ApiKeyAuthentication(Authentication):
    def is_authenticated(self, request, **kwargs):
        api_key = request.META.get('HTTP_X_API_KEY')
        if api_key == settings.API_KEY:
            return True
        raise ImmediateHttpResponse(HttpUnauthorized('Wrong API Key'))
    def get_identifier(self, request):
        return request.META.get('HTTP_X_API_KEY', 'unknown')