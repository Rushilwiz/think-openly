from . import views

from django.urls import path, include
from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns  = [
    path('profile/create', views.UserProfileCreate.as_view()),
    path('profile/', views.UserProfileDetail.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('event/<int:pk>', views.EventViewSet.as_view({'get': 'retrieve'})),
    path('event/', views.EventViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('article/<int:pk>', views.ArticleViewSet.as_view({'get': 'retrieve'})),
    path('article/', views.ArticleViewSet.as_view({'get': 'list', 'post': 'create'}))
]