from django.urls import path
from . import views

app_name = 'students'

urlpatterns = [
    path('appointment_student/', views.studentAppointment, name='student_appointment'),
    path('messages_student/', views.studentMessages, name='student_messages'),
    path('schedule_student/', views.studentSchedule, name='student_schedule'),
    path('settings_student/', views.studentSettings, name='student_settings'),
]
