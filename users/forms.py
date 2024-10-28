from django import forms
from django.contrib.auth.models import User
from .models import Student
from django.contrib.auth.forms import AuthenticationForm

class StudentRegistrationForm(forms.ModelForm):
    username = forms.CharField(max_length=150)
    first_name = forms.CharField(max_length=30)  # Add first_name field
    last_name = forms.CharField(max_length=30)   # Add last_name field
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput())
    password_confirm = forms.CharField(label='Confirm Password', widget=forms.PasswordInput())

    class Meta:
        model = Student
        fields = ['contact_number', 'student_id', 'department', 'program', 'year_of_study', 'address']

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        password_confirm = cleaned_data.get("password_confirm")

        if password and password_confirm and password != password_confirm:
            raise forms.ValidationError("Passwords do not match.")

        return cleaned_data

    def save(self, commit=True):
        user = User(
            username=self.cleaned_data['username'],
            first_name=self.cleaned_data['first_name'],  # Make sure to save first name
            last_name=self.cleaned_data['last_name'],    # Make sure to save last name
            email=self.cleaned_data['email'],
        )
        user.set_password(self.cleaned_data['password'])
        if commit:
            user.save()
            student = super().save(commit=False)
            student.user = user
            if commit:
                student.save()
        return student

        
class LoginForm(AuthenticationForm):
    username = forms.CharField(max_length=150, required=True)
    password = forms.CharField(widget=forms.PasswordInput, required=True)