from django.urls import path
from . import views 

app_name = 'admin_counselor'

urlpatterns = [
    
    path('admin_counselor/', views.adminCounselor, name='admin_counselor'),
    path('appointment/', views.adminAppointment, name='admin_appointment'),
    path('counselor/', views.adminCounselors, name='admin_counselors'),
    path('feedback/', views.adminFeedbacks, name='admin_feedbacks'),
    path('requests/', views.adminRequests, name='admin_requests'),
    path('schedule/', views.adminSchedule, name='admin_schedule'),
    path('settings/', views.adminSettings, name='admin_settings'),
    path('students/', views.adminStudents, name='admin_students'),
]

 