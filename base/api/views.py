from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import StudySerializer, UserSerializer
from base.models import Study

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]
    return Response(routes)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getStudies(request):
    user = request.user
    studies = user.study_set.all()
    serializer = StudySerializer(studies, many=True)
    return Response(serializer.data)


from rest_framework import generics, viewsets
from rest_framework.permissions import AllowAny

class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

# Studyの一覧を取得
class StudyListView(generics.ListAPIView):
    queryset = Study.objects.all()
    serializer_class = StudySerializer
    permission_classes = (AllowAny,)

# IDに基づいて特定のStudyを取得
class StudyRetrieveView(generics.RetrieveAPIView):
    queryset = Study.objects.all()
    serializer_class = StudySerializer
    permission_classes = (AllowAny,)

# Studyの更新削除
class StudyViewSet(viewsets.ModelViewSet):
    queryset = Study.objects.all()
    serializer_class = StudySerializer

    



