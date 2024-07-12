from django.db import models

class td(models.Model):
    id = models.AutoField(primary_key=True)
    nombre= models.CharField(max_length = 30)
    descripcion= models.CharField(max_length = 500) 
    
    def __str__(self):
        return self.nombre

class ciudad(models.Model):
    id = models.AutoField(primary_key=True)
    nombre= models.CharField(max_length = 30)
    descripcion= models.CharField(max_length = 500)    

    def __str__(self):
        return self.nombre


class User(models.Model):
    id = models.AutoField(primary_key=True)
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    idtipodocumento = models.ForeignKey(td, on_delete=models.CASCADE)
    documento = models.BigIntegerField()
    idciudad = models.ForeignKey(ciudad, on_delete=models.CASCADE)
    fechanacimiento = models.DateField()
    email = models.EmailField()
    telefono = models.BigIntegerField()
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=30)
    

    def __str__(self):
        return f"{self.nombres} {self.apellidos}"