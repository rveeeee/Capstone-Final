from django.shortcuts import render
from django.views.decorators.cache import never_cache
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib import messages
# from .forms import FullCounselorRegistrationForm

# @never_cache
# @login_required
def adminCounselor(request):
    return render(request, 'admin_counselor.html')

# @never_cache
# @login_required
def adminAppointment(request):
    return render(request, 'appointment_admin.html')

# @never_cache
# @login_required
def adminCounselors(request):
    # if request.method == 'POST':
    #     form = FullCounselorRegistrationForm(request.POST, request.FILES)
    #     if form.user_form.is_valid() and form.counselor_form.is_valid():
    #         form.save()
    #         messages.success(request, "Counselor registered successfully!")
    #         return redirect('counselor:dashboard_counselor')  # Adjust the redirect URL as needed
    # else:
    #     form = FullCounselorRegistrationForm()

    return render(request, 'counselor_admin.html', {'form': form})

# @never_cache
# @login_required
def adminFeedbacks(request):
    return render(request, 'feedbacks_admin.html')

# @never_cache
# @login_required
def adminRequests(request):
    return render(request, 'requests_admin.html')

# @never_cache
# @login_required
def adminSchedule(request):
    return render(request, 'schedule_admin.html')

# @never_cache
# @login_required
def adminSettings(request):
    return render(request, 'settings_admin.html')

# @never_cache
# @login_required
def adminStudents(request):
    return render(request, 'students_admin.html')
