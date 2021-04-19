from transmission_rpc import Client

c = Client(host='localhost', port=9091, username='pi', password='GetALife821996')
torrentsList = c.get_torrents()

returnList = []

for t in torrentsList:
    name = t.name
    status = t.status
    progress = t.progress
    if status == 'downloading':
        eta = t.eta
        rate = t.rateDownload
    else:
        eta = '-:--:--'
        rate = '--'
    data = {
        'name': name,
        'status': status,
        'progress': progress,
        'eta': eta,
        'rate': rate
    }
    returnList.append(data)

print(returnList)