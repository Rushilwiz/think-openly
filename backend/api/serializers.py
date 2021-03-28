from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Profile, Article, Event

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name')

class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create(
            username = validated_data['username'],
            email = validated_data['email'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        profile = models.Profile.objects.create(user=user)
        profile.save()

        return user

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name', 'last_name')

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ('user', 'nickname',)

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('headline', 'content',)

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('name', 'date', 'organizer', 'address', 'description',)