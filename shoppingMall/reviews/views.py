from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import ListView, DetailView, CreateView
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Product, Review
from .forms import ReviewForm

class ProductListView(ListView):
    model = Product

class ProductDetailView(DetailView):
    model = Product

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['reviews'] = Review.objects.filter(product=self.object)
        context['form'] = ReviewForm()
        return context

class ReviewCreateView(LoginRequiredMixin, CreateView):
    model = Review
    form_class = ReviewForm
    success_url = reverse_lazy('product_list')

    def form_valid(self, form):
        form.instance.product = get_object_or_404(Product, pk=self.kwargs['pk'])
        form.instance.user = self.request.user
        return super().form_valid(form)