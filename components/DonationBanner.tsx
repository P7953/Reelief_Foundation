const DonationBanner = () => (
  <div className="container mx-auto px-44 mt-10 mb-20">
    <div className="relative rounded-3xl p-10 shadow-xl overflow-hidden bg-gradient-to-br 
                  from-primary-yellow via-primary-orange to-orange-600 ">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain"
        }}
      />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Giving is not just about <br />
            making a Donation it's about <br />
            making difference.
          </h2>

          <p className="text-white/90 mt-4 italic text-sm">
            (Your Donation will be Exempted Under Income Tax Act Provision Section 80G)
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-end">
          <a
            href="https://rzp.io/l/saptrishifoundation"
            className="btn-secondary"
          >
            Donate Now
          </a>
        </div>

      </div>
    </div>
  </div>
)

export default DonationBanner
