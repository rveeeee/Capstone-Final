"""
URL configuration for andito_ako project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('login/', views.logInPage, name='login'),
    path('sign-up/', views.signUpPage, name='sign-up'),
    path('appointment/', views.appointmentPage, name='appointment'),
    #student interface
    path('student/appointment', views.studentAppointment, name='student_appointment'),
    path('student/message', views.studentMessages, name='student_messages'),
    path('student/schedule', views.studentSchedule, name='student_schedule'),
    path('student/settings', views.studentSettings, name='student_settings'),
    #counselor interface
    path('counselor/appointment', views.counselorAppointment, name='counselor_appointment'),
    path('counselor/dashboard', views.counselorDashboard, name='counselor_dashboard'),
    path('counselor/messages', views.counselorMessages, name='counselor_messages'),
    path('counselor/settings', views.counselorSettings, name='counselor_settings'),
    path('counselor/students', views.counselorStudents, name='counselor_students'),
    #admin interface
    path('admin/admin', views.admin, name='admin'),
    path('admin/appointment', views.adminAppointment, name='admin_appointment'),
    path('admin/counselor', views.adminCounselor, name='admin_counselor'),
    path('admin/feedback', views.adminFeedbacks, name='admin_feedback'),
    path('admin/requests', views.adminRequests, name='admin_requests'),
    path('admin/schedule', views.adminSchedule, name='admin_schedule'),
    path('admin/settings', views.adminSettings, name='admin_settings'),
    path('admin/students', views.adminStudents, name='admin_students'),
]
