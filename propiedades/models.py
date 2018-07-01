# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class house(models.Model):
    id = models.AutoField(primary_key=True)
    pub_date = models.DateTimeField('date published')
    superficie = models.DecimalField(max_digits=15, decimal_places=2, default=0.00)
    construccion = models.DecimalField(max_digits=15, decimal_places=2, default=0.00)
    recamaras = models.IntegerField(default=0)

class Direccion(models.Model):
    house = models.ForeignKey(house, on_delete=models.CASCADE)
    calle= models.CharField(max_length=200)
    numero= models.CharField(max_length=20)
    colonia= models.CharField(max_length=200)
    codigopostal= models.IntegerField(default=0)
    ciudad= models.CharField(max_length=200)
    estado= models.CharField(max_length=200)