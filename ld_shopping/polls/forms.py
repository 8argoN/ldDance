from django.forms import ModelForm
from django import forms
from polls.models import *

class Form(ModelForm):
    class Meta:
        model = Review
        fields=['r_code','u_id','r_title','r_content','r_star','r_size','u_size']
 
