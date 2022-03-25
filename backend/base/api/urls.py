from xml.etree.ElementInclude import include
from django.urls import path
from . import views
from .views import CreateUserView, MyTokenObtainPairView, StudyListView, StudyRetrieveView, StudyViewSet
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from rest_framework import routers
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('studies', StudyViewSet, basename='studies')

urlpatterns = [
    path('', views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('studies/', views.getStudies),
    path('list-study/', StudyListView.as_view(), name='list-study'),
    path('detail-study/<str:pk>/', StudyRetrieveView.as_view(), name='detail-study'),
    path('register/', CreateUserView.as_view(), name='register'),
    path('auth/', include('djoser.urls.jwt')),
    path('', include(router.urls)),
]

