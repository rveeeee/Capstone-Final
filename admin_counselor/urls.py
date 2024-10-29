from django.urls import path
from . import views 

app_name = 'admin_counselor'

urlpatterns = [
    
    path('admin_counselor/', views.adminCounselor, name='admin_counselor'),
    path('appointment_admin/', views.adminAppointment, name='admin_appointment'),
    path('counselor_admin/', views.adminCounselors, name='admin_counselors'),
    path('feedback_admin/', views.adminFeedbacks, name='admin_feedbacks'),
    path('requests_admin/', views.adminRequests, name='admin_requests'),
    path('schedule_admin/', views.adminSchedule, name='admin_schedule'),
    path('settings_admin/', views.adminSettings, name='admin_settings'),
    path('students_admin/', views.adminStudents, name='admin_students'),
]

 