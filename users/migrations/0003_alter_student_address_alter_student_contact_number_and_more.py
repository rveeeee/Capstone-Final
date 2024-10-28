# Generated by Django 5.1.2 on 2024-10-27 23:19

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_remove_student_email_remove_student_first_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='address',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='contact_number',
            field=models.CharField(blank=True, default='', max_length=11, validators=[django.core.validators.RegexValidator(code='invalid_contact', message='Contact number must be 11 digits', regex='^\\d{11}$')]),
        ),
        migrations.AlterField(
            model_name='student',
            name='department',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='student',
            name='program',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='student',
            name='year_of_study',
            field=models.CharField(blank=True, default='', max_length=20),
        ),
    ]