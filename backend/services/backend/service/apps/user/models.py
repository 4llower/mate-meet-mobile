import uuid

from django.contrib.auth.models import PermissionsMixin
from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils.translation import gettext_lazy as _

from libs.django.models import BaseModel
from apps.user import managers as user_managers


class User(BaseModel, AbstractBaseUser, PermissionsMixin):
    login = models.CharField(
        unique=True,
        max_length=64,
        verbose_name=_('Login'),
    )
    is_active = models.BooleanField(
        default=False,
        verbose_name=_('Is active'),
    )
    is_staff = models.BooleanField(
        default=False,
    )

    groups = None

    objects = user_managers.UserManager()
    USERNAME_FIELD = 'login'

    class Meta:
        verbose_name_plural = _('Users')
        verbose_name = _('User')

    def __str__(self):
        return f"{self.login}"


class Profile(models.Model):
    uuid = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )
    user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE,
        blank=True,
        verbose_name=_('User'),
    )
    avatar = models.ForeignKey(
        to='Avatar',
        on_delete=models.PROTECT,
        related_name='profiles',
        related_query_name='profile',
    )
    first_name = models.CharField(
        max_length=32,
        blank=True,
        verbose_name=_('First name'),
    )
    last_name = models.CharField(
        blank=True,
        max_length=32,
        verbose_name=_('Last name'),
    )
    phone_number = models.CharField(
        blank=True,
        max_length=15,
        verbose_name=_('Phone number'),
    )
    description = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = _('User profiles')
        verbose_name = _('User profile')