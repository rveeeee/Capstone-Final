from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    year_of_study = models.CharField(max_length=20, default="", blank=True)
    student_id = models.CharField(max_length=20, unique=True)
    department = models.CharField(max_length=100, default="", blank=True)
    program = models.CharField(max_length=100, default="", blank=True)
    contact_number = models.CharField(
        max_length=11,
        validators=[RegexValidator(regex=r'^\d{11}$', message='Contact number must be 11 digits', code='invalid_contact')],
        default="", blank=True
    )
    address = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"
