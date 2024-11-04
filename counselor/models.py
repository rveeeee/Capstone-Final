from django.db import models
from django.contrib.auth.models import User

class Counselor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='counselor_profile')
    employee_id = models.CharField(max_length=20, unique=True)  # unique ID for counselor
    contact_number = models.CharField(max_length=11, blank=True)
    address = models.TextField(blank=True)
    department = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} (Counselor)"
