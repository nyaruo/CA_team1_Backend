from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Study(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    genre = models.TextField(null=False)
    study_time = models.IntegerField(
        default=0, 
        null=False,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
