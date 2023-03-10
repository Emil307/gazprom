# from django.contrib.auth.models import User
from django.db import models


class GazpromUser(models.Model):
    login = models.EmailField(unique=True, primary_key=True)
    password = models.CharField(max_length=255)
    name = models.CharField(max_length=255, default='')
    surname = models.CharField(max_length=255, default='')
    isAdmin = models.BooleanField(default=False)  # False = stuff; True = Admin
    isDeveloper = models.BooleanField(default=False)
    isLogin = models.BooleanField(default=True)
    joined_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # user = models.ForeignKey(User, verbose_name='Пользователь', on_delete=models.CASCADE)

    def __str__(self):
        return f'{str(self.login)}: {self.name} {self.surname}'


class Well(models.Model):
    id = models.AutoField(primary_key=True)
    conditions = models.CharField(max_length=255, null=True)
    geo = models.CharField(max_length=255, null=True)
    status = models.IntegerField(null=True)  # 1 - рабочая; 2 - законсервированная; 3 - требуется ремонт

    def __str__(self):
        return f'ID: {str(self.id)} - Статус {self.status}'


class Checks(models.Model):
    id = models.AutoField(primary_key=True)
    well_id = models.ForeignKey('Well', on_delete=models.PROTECT)
    datetime = models.DateTimeField(auto_now_add=True)
    description = models.TextField()

    def __str__(self):
        return f'Проверка {str(self.id)}'
