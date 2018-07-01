# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.shortcuts import render
# Create your views here.
from django.http import HttpResponse
from django.template.loader import render_to_string
from .models import house, Direccion
from django.core import serializers
import json 
from pprint import pprint

def index(request):
    houses_list = house.objects.order_by('id')
    casa_json = serializers.serialize('json', houses_list)
    context = {'houses_list': houses_list, 'casas': casa_json}
    #serialized_obj1 = serializers.serialize('json', [ houses_list,  ])
    template = render(request, 'house/index.html',context)
    return HttpResponse(template)

def detail(request, id):
    try:
        house1 = house.objects.get(id=id)
        direccion = Direccion.objects.get(id=id)
        serialized_obj = serializers.serialize('json', [ house1, ])
    except house1.DoesNotExist:
        raise Http404("La casa seleccionada no existe")
    return render(request, 'house/detalles.html', {'house': house1, 'direccion': direccion})