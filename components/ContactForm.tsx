'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language'

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('sending')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form data:', data)
      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-white mb-2 font-medium">
          {t('contact.form.name')} *
        </label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          className={`w-full bg-transparent border-b-2 ${
            errors.name ? 'border-red-500' : 'border-gray-100'
          } text-white px-2 py-3 focus:outline-none focus:border-yellow transition-colors`}
          disabled={status === 'sending'}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-white mb-2 font-medium">
          {t('contact.form.email')} *
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className={`w-full bg-transparent border-b-2 ${
            errors.email ? 'border-red-500' : 'border-gray-100'
          } text-white px-2 py-3 focus:outline-none focus:border-yellow transition-colors`}
          disabled={status === 'sending'}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-white mb-2 font-medium">
          {t('contact.form.message')} *
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
          })}
          className={`w-full bg-transparent border-2 ${
            errors.message ? 'border-red-500' : 'border-gray-100'
          } text-white px-4 py-3 focus:outline-none focus:border-yellow transition-colors resize-none`}
          disabled={status === 'sending'}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ scale: status === 'sending' ? 1 : 1.05 }}
        whileTap={{ scale: status === 'sending' ? 1 : 0.95 }}
        className={`btn-primary w-full md:w-auto ${
          status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {status === 'sending'
          ? t('contact.form.sending')
          : t('contact.form.send')}
      </motion.button>

      {/* Status Messages */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded"
        >
          {t('contact.form.success')}
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded"
        >
          {t('contact.form.error')}
        </motion.div>
      )}
    </form>
  )
}
