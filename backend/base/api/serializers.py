from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from base.models import Study
from django.contrib.auth.models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}
    
    def create(self, calidated_data):
        user = User.objects.create_user(**calidated_data)
        return user

class StudySerializer(ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)
    class Meta:
        model = Study
        fields = '__all__'

