
import { CheckCircle2, BarChart4, LineChart } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  ChartTooltipContent,
  ChartLegendContent,
} from "@/components/ui/chart";
import { 
  BarChart, 
  Bar, 
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Tooltip,
  Legend 
} from "recharts";

const salesData = [
  { name: "Jan", sales: 4000, target: 2400 },
  { name: "Fev", sales: 3000, target: 2400 },
  { name: "Mar", sales: 5000, target: 2400 },
  { name: "Abr", sales: 2780, target: 2400 },
  { name: "Mai", sales: 4890, target: 2400 },
  { name: "Jun", sales: 3390, target: 2400 },
];

const marketShareData = [
  { name: "Produto A", value: 400 },
  { name: "Produto B", value: 300 },
  { name: "Produto C", value: 300 },
  { name: "Produto D", value: 200 },
];

const performanceData = [
  { name: "Q1", actual: 4000, forecast: 2400 },
  { name: "Q2", actual: 3000, forecast: 2800 },
  { name: "Q3", actual: 2000, forecast: 2800 },
  { name: "Q4", actual: 2780, forecast: 3000 },
];

const COLORS = ["#8b5cf6", "#6366f1", "#4f46e5", "#4338ca"];

const BeneficiariesSection = () => {
  return (
    <section id="beneficiarios" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pensia-dark to-pensia-blue/30 opacity-80 z-0" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-glow">
            Quem se <span className="text-pensia-purple">Beneficia</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Nossas soluções são especialmente eficazes para empresas que precisam tomar 
            decisões baseadas em grandes volumes de dados.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
          <div className="glass-card p-8 rounded-2xl flex-1 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BarChart4 className="text-pensia-purple" />
              Segmentos que atendemos
            </h3>
            <ul className="space-y-3">
              {["Empresas de tecnologia", "Educação (escolas, faculdades e universidades)", 
                "Saúde", "Contabilidade", "Varejo", "Indústria", 
                "Agronegócio"].map((segment, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-pensia-purple mt-1 shrink-0" />
                  <span>{segment}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-card p-8 rounded-2xl flex-1 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <LineChart className="text-pensia-purple" />
              Nossos resultados
            </h3>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pensia-purple">+300</div>
                <p className="text-gray-300">dashboards entregues</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pensia-purple">+50</div>
                <p className="text-gray-300">empresas atendidas</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Dashboard Visualization */}
        <div className="mt-12 relative">
          <div className="glass-card p-4 md:p-6 lg:p-8 rounded-2xl overflow-hidden purple-glow">
            <h3 className="text-xl font-bold mb-6">Dashboard Interativo de Vendas e Performance</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:col-span-1">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-sm text-gray-400 mb-1">Vendas Mensais</h4>
                  <div className="text-2xl font-bold text-pensia-purple">R$ 1.452.300</div>
                  <div className="flex items-center text-green-500 text-sm mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                      <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    12.5% vs mês anterior
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-sm text-gray-400 mb-1">Novos Clientes</h4>
                  <div className="text-2xl font-bold text-pensia-purple">385</div>
                  <div className="flex items-center text-green-500 text-sm mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                      <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    8.2% vs trimestre anterior
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg lg:mt-0">
                  <h4 className="text-sm text-gray-400 mb-1">Ticket Médio</h4>
                  <div className="text-2xl font-bold text-pensia-purple">R$ 3.770</div>
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                      <path d="M8 4V12M8 12L4 8M8 12L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    2.1% vs mês anterior
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-sm text-gray-400 mb-1">Retenção</h4>
                  <div className="text-2xl font-bold text-pensia-purple">94.6%</div>
                  <div className="flex items-center text-green-500 text-sm mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                      <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    1.2% vs ano anterior
                  </div>
                </div>
              </div>
              
              {/* Bar Chart */}
              <div className="bg-white/5 p-4 rounded-lg lg:col-span-2">
                <h4 className="text-sm text-gray-400 mb-4">Vendas vs Meta (2023)</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}K`} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#6366f1', borderRadius: '0.375rem' }}
                        itemStyle={{ color: '#f3f4f6' }}
                        labelStyle={{ color: '#f3f4f6' }}
                      />
                      <Legend />
                      <Bar dataKey="sales" name="Vendas" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="target" name="Meta" fill="#4338ca" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Line Chart */}
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-sm text-gray-400 mb-4">Performance x Previsão (2023)</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}K`} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#6366f1', borderRadius: '0.375rem' }}
                        itemStyle={{ color: '#f3f4f6' }}
                        labelStyle={{ color: '#f3f4f6' }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="actual" name="Realizado" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                      <Line type="monotone" dataKey="forecast" name="Previsto" stroke="#4f46e5" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Pie Chart */}
              <div className="bg-white/5 p-4 rounded-lg lg:col-span-2">
                <h4 className="text-sm text-gray-400 mb-4">Market Share por Produto</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={marketShareData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {marketShareData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#6366f1', borderRadius: '0.375rem' }}
                        itemStyle={{ color: '#f3f4f6' }}
                        labelStyle={{ color: '#f3f4f6' }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center text-sm text-gray-400">
              Dashboard interativo com dados fictícios para ilustração. Na prática, seus dados reais seriam integrados.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiariesSection;
