##urls.pyはデフォルトでは作成されていないので作成すること。
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]