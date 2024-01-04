from django.db import models
import uuid

# Create your models here.

class affairs (models.Model):
    affairs_uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    headquarter = models.CharField(null=True,max_length=30) # 본부
    center = models.CharField(null=True,max_length=30) # 센터
    team = models.CharField(null=True,max_length=30) # 팀
    affairs = models.CharField(null=True,max_length=30)
    cust_no = models.CharField(null=True,max_length=30)
    contract = models.CharField(null=True,max_length=30)
    powertocost = models.CharField(null=True,max_length=30)

class affairspower (models.Model):
    affairs_uuid = models.ForeignKey(affairs, to_field='affairs_uuid',on_delete=models.CASCADE) # uuid
    affairspower_uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    affairs = models.CharField(null=True,max_length=30) # 국사
    power = models.CharField(null=True,max_length=30) # 전력량
    time = models.CharField(null=True,max_length=30) # 일