import { useParams, Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { membershipConfig } from '../data/seed'

const fmt = (n: number) => `$${n.toLocaleString()}`

const MembershipJoinPage: React.FC = () => {
  const { plan: planSlug } = useParams<{ plan: string }>()
  const reducedMotion = useReducedMotion()
  const plan = membershipConfig.plans.find(p => p.slug === planSlug)

  if (plan) {
    return (
      <div className="min-h-[80vh] bg-[#0d0d0d] text-white flex items-center justify-center">
        <div className="text-center px-6 max-w-md">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-px bg-white/10 mx-auto mb-6"
          />
          <motion.p
            initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[10px] uppercase tracking-[0.28em] text-white/20 font-light mb-5"
          >
            Enrollment Coming Soon
          </motion.p>
          <motion.h1
            initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-3xl font-light tracking-[0.03em] italic mb-1"
          >
            {plan.name} Membership
          </motion.h1>
          <motion.p
            initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-[#C8B89A] text-lg font-light mb-5"
          >
            {fmt(plan.price)} &middot; {plan.discountPercent}% Discount
          </motion.p>
          <motion.p
            initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/35 text-sm font-light leading-relaxed mb-8"
          >
            {plan.shortDescription}
          </motion.p>
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              to="/membership"
              className="px-6 py-2.5 bg-white text-black text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Back to Membership
            </Link>
            <Link
              to="/booking"
              className="px-6 py-2.5 border border-white/15 text-white/50 text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:border-white/40 hover:text-white/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] bg-[#0d0d0d] text-white flex items-center justify-center">
      <div className="text-center px-6 max-w-md">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-px bg-white/10 mx-auto mb-6"
        />
        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-[10px] uppercase tracking-[0.28em] text-white/20 font-light mb-5"
        >
          Plan Not Found
        </motion.p>
        <motion.h1
          initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl font-light tracking-[0.03em] mb-5"
        >
          This plan is not available
        </motion.h1>
        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/30 text-sm font-light leading-relaxed mb-8"
        >
          Please return to the membership page to view available plans.
        </motion.p>
        <Link
          to="/membership"
          className="px-6 py-2.5 bg-white text-black text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          Explore Plans
        </Link>
      </div>
    </div>
  )
}

export default MembershipJoinPage
