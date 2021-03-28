from django.contrib.auth.models import User
from django.db import models
from tinymce.models import HTMLField

from .models import *

# Create your models here.

class Profile (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'

    class Meta:
        verbose_name_plural = "Profiles"

class Post(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    headline = models.CharField(max_length=100, blank=True, null=True)
    content = HTMLField(blank=True, null=True)
    votes = models.ManyToManyField(User, related_name="votes" ,)

    # NLP Data

    def __str__(self):
        return self.headline

class Event(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    organizer = models.CharField(max_length=50, blank=True, null=True)
    address = models.CharField(max_length=50, blank=True, null=True)
    description = models.TextField(max_length=2000, blank=True, null=True)


    def __str__(self):
        return self.name
