from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.http import Http404
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from .models import User,Address,Cart,Cloth,Review,Purchase
from django.http import HttpResponse, HttpResponseRedirect
from polls.forms import *

def createReview(request):
    form=Form()
    if request.method == 'POST':
        form =Form(request.POST)
        if form.is_valid():
            form.save()
    return render(request, 'polls/createReview.html',{'form':form})


def index(request):
    form =Form()
    reviewList=Review.objects.all()
    return render(request, 'polls/projet.html',{'reviewList':reviewList})

