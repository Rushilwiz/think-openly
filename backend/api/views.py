from django.shortcuts import render, get_object_or_404

from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from .models import *
from .serializers import *

# Create your views here.

class UserProfileDetail(APIView):
    def get(self, request, format=None):
        profile = request.user.profile
        serializer = ProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UserProfileCreate(CreateAPIView):
    model = User
    permission_classes = [permissions.AllowAny]
    serializer_class = UserCreateSerializer

class EventViewSet(ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class PostDetail(APIView):
    def get(self, request, format=None):
        profile = request.user.profile
        serializer = ProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UserProfileCreate(CreateAPIView):
    model = User
    permission_classes = [permissions.AllowAny]
    serializer_class = UserCreateSerializer

class PostUpvote(APIView):
    def post(self, request, format=None):
        obj = get_object_or_404(Post, pk=self.kwargs['id'])
        user = request.user
        if user not in obj.votes.all():
            obj.votes.add(user)
        return Response(status=status.HTTP_200_OK)