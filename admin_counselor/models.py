from django.db import models
from django.contrib.auth.models import User

class AdminCounselor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    employee_id = models.CharField(max_length=20, unique=True)  # unique ID for admin counselor
    contact_number = models.CharField(max_length=11, blank=True)
    office_location = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} (Admin Counselor)"

