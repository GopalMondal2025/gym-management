/api/v1/auth/register /api/v1/auth/login /api/v1/auth/logout
/api/v1/auth/refresh-token /api/v1/auth/verify-email/:verificationToken
/api/v1/auth/resend-email-verification /api/v1/auth/forgot-password
/api/v1/auth/reset-password/:resetToken /api/v1/auth/change-password
/api/v1/auth/current-user

/api/v1/gym/profile /api/v1/gym/profile/update /api/v1/gym/profile/avatar
/api/v1/gym/settings /api/v1/gym/settings/update /api/v1/gym/dashboard
/api/v1/gym/analytics /api/v1/gym/reports

/api/v1/members /api/v1/members/:memberId /api/v1/members/create
/api/v1/members/update/:memberId /api/v1/members/delete/:memberId
/api/v1/members/status/:memberId /api/v1/members/search
/api/v1/members/checkin/:memberId /api/v1/members/checkout/:memberId
/api/v1/members/freeze/:memberId /api/v1/members/unfreeze/:memberId
/api/v1/members/renew-membership/:memberId
/api/v1/members/upload-photo/:memberId
/api/v1/members/emergency-contact/:memberId

/api/v1/memberships /api/v1/memberships/:membershipId /api/v1/memberships/create
/api/v1/memberships/update/:membershipId
/api/v1/memberships/delete/:membershipId /api/v1/memberships/assign/:memberId
/api/v1/memberships/active /api/v1/memberships/expired
/api/v1/memberships/renew/:membershipId

/api/v1/plans /api/v1/plans/:planId /api/v1/plans/create
/api/v1/plans/update/:planId /api/v1/plans/delete/:planId /api/v1/plans/active
/api/v1/plans/popular

/api/v1/attendance /api/v1/attendance/today /api/v1/attendance/history/:memberId
/api/v1/attendance/checkin/:memberId /api/v1/attendance/checkout/:memberId
/api/v1/attendance/stats /api/v1/attendance/monthly
/api/v1/attendance/manual-entry

/api/v1/payments /api/v1/payments/:paymentId /api/v1/payments/create
/api/v1/payments/update/:paymentId /api/v1/payments/delete/:paymentId
/api/v1/payments/member/:memberId /api/v1/payments/pending
/api/v1/payments/completed /api/v1/payments/failed /api/v1/payments/overdue
/api/v1/payments/refund/:paymentId /api/v1/payments/invoice/:paymentId

/api/v1/invoices /api/v1/invoices/:invoiceId /api/v1/invoices/create
/api/v1/invoices/download/:invoiceId /api/v1/invoices/send/:invoiceId

/api/v1/trainers /api/v1/trainers/:trainerId /api/v1/trainers/create
/api/v1/trainers/update/:trainerId /api/v1/trainers/delete/:trainerId
/api/v1/trainers/assign-member /api/v1/trainers/remove-member
/api/v1/trainers/schedule/:trainerId /api/v1/trainers/salary/:trainerId

/api/v1/staff /api/v1/staff/:staffId /api/v1/staff/create
/api/v1/staff/update/:staffId /api/v1/staff/delete/:staffId /api/v1/staff/roles
/api/v1/staff/permissions

/api/v1/classes /api/v1/classes/:classId /api/v1/classes/create
/api/v1/classes/update/:classId /api/v1/classes/delete/:classId
/api/v1/classes/join/:classId /api/v1/classes/leave/:classId
/api/v1/classes/schedule /api/v1/classes/upcoming

/api/v1/workouts /api/v1/workouts/:workoutId /api/v1/workouts/create
/api/v1/workouts/update/:workoutId /api/v1/workouts/delete/:workoutId
/api/v1/workouts/assign/:memberId /api/v1/workouts/member/:memberId

/api/v1/diets /api/v1/diets/:dietId /api/v1/diets/create
/api/v1/diets/update/:dietId /api/v1/diets/delete/:dietId
/api/v1/diets/assign/:memberId /api/v1/diets/member/:memberId

/api/v1/notifications /api/v1/notifications/send /api/v1/notifications/broadcast
/api/v1/notifications/member/:memberId
/api/v1/notifications/read/:notificationId

/api/v1/reports/revenue /api/v1/reports/attendance /api/v1/reports/memberships
/api/v1/reports/payments /api/v1/reports/trainers /api/v1/reports/export

/api/v1/analytics/overview /api/v1/analytics/revenue /api/v1/analytics/members
/api/v1/analytics/attendance /api/v1/analytics/growth

/api/v1/expenses /api/v1/expenses/:expenseId /api/v1/expenses/create
/api/v1/expenses/update/:expenseId /api/v1/expenses/delete/:expenseId
/api/v1/expenses/monthly

/api/v1/inventory /api/v1/inventory/:itemId /api/v1/inventory/create
/api/v1/inventory/update/:itemId /api/v1/inventory/delete/:itemId
/api/v1/inventory/low-stock

/api/v1/branches /api/v1/branches/:branchId /api/v1/branches/create
/api/v1/branches/update/:branchId /api/v1/branches/delete/:branchId

/api/v1/uploads/image /api/v1/uploads/document /api/v1/uploads/avatar

/api/v1/settings/general /api/v1/settings/security
/api/v1/settings/notifications /api/v1/settings/payments

/api/v1/support/tickets /api/v1/support/tickets/:ticketId
/api/v1/support/create-ticket /api/v1/support/reply/:ticketId
/api/v1/support/close/:ticketId

/api/v1/coupons /api/v1/coupons/:couponId /api/v1/coupons/create
/api/v1/coupons/update/:couponId /api/v1/coupons/delete/:couponId
/api/v1/coupons/apply

/api/v1/subscriptions /api/v1/subscriptions/current
/api/v1/subscriptions/upgrade /api/v1/subscriptions/cancel
/api/v1/subscriptions/history

/api/v1/qr/generate/:memberId /api/v1/qr/checkin /api/v1/qr/validate

/api/v1/health /api/v1/version
