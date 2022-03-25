from rest_framework.serializers import ModelSerializer
from base.models import Study

class StudySerializer(ModelSerializer):
    class Meta:
        model = Study
        fields = '__all__'