from django.contrib import admin
from .models import Student

class StudentAdmin(admin.ModelAdmin):
    list_display = ('user_first_name', 'user_last_name', 'user_email', 'student_id', 'department', 'program')

    def user_first_name(self, obj):
        return obj.user.first_name
    user_first_name.short_description = 'First Name'

    def user_last_name(self, obj):
        return obj.user.last_name
    user_last_name.short_description = 'Last Name'

    def user_email(self, obj):
        return obj.user.email
    user_email.short_description = 'Email'

admin.site.register(Student, StudentAdmin)