from django.urls import path
from . import views

app_name = 'students'

urlpatterns = [
    path('appointment/', views.studentAppointment, name='student_appointment'),
    path('message/', views.studentMessages, name='student_messages'),
    path('schedule/', views.studentSchedule, name='student_schedule'),
    path('settings/', views.studentSettings, name='student_settings'),
]
