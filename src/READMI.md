# Smart Pumpjack Monitoring Dashboard Project

## Components Overview

### 1. Main Dashboard View
- Real-time production metrics 
- Equipment status indicators
- Performance gauges for:
 - Motor amps
 - Gearbox temperature
 - Strokes per minute
 - Oil production rate

### 2. Alarm Management Panel
- Active alarms display
- Alarm history 
- Acknowledgment interface

### 3. Analytics View
- Production trends
- Efficiency calculations
- Equipment health scores
- Historical data charts

### 4. Control Interface
- Start/Stop controls
- Speed adjustments
- Mode selection
- Emergency shutdown

## Technical Implementation

### OPC UA Tags Required
```python
# Core Process Tags
- Motor_Amps
- Gearbox_Temp
- Stroke_Rate
- Production_Rate
- Status
- Alarms
- Control_Commands
