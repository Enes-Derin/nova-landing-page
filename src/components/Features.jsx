import React from 'react';

function Features() {
    return (
        <section style={{ background: "#F8FAFC" }} className="max-w-7xl mx-auto py-20 px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Features</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center place-items-center">
                {/* Feature Card 1 */}
                <div className="w-full max-w-xs shadow-lg p-6 rounded-xl bg-white hover:shadow-2xl transition-shadow duration-300 text-center">
                    <div className="text-3xl mb-4">⚡</div>
                    <h3 className="font-bold text-xl mb-2">Lightning Fast</h3>
                    <p className="text-gray-600">Takımlar arasında hızlı veri akışı ve gerçek zamanlı güncellemeler.</p>
                </div>

                {/* Feature Card 2 */}
                <div className="w-full max-w-xs shadow-lg p-6 rounded-xl bg-white hover:shadow-2xl transition-shadow duration-300 text-center">
                    <div className="text-3xl mb-4">🎛</div>
                    <h3 className="font-bold text-xl mb-2">Clean Interface</h3>
                    <p className="text-gray-600">Dikkat dağıtmayan, minimal ve odaklı bir çalışma deneyimi.</p>
                </div>

                {/* Feature Card 3 */}
                <div className="w-full max-w-xs shadow-lg p-6 rounded-xl bg-white hover:shadow-2xl transition-shadow duration-300 text-center">
                    <div className="text-3xl mb-4">🤖</div>
                    <h3 className="font-bold text-xl mb-2">Smart Automation</h3>
                    <p className="text-gray-600">Zaman alan görevleri otomatikleştirerek iş yükünü azaltın.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;
