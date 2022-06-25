using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class Task3 : MonoBehaviour, IPointerClickHandler
{
    float red, green, blue;
    int force;
    Vector3 target, collid, distance;

    public void OnPointerClick(PointerEventData eventData)
    {
        red = Random.Range(0.0f, 1.0f);
        green = Random.Range(0.0f, 1.0f);
        blue = Random.Range(0.0f, 1.0f);
        gameObject.GetComponent<Renderer>().material.color = new Color(red, green, blue);

       
        target = eventData.pointerPressRaycast.worldPosition;
        
        collid = Camera.main.transform.position;

        force = 100;
        distance = (target - collid).normalized;
        collid = distance * force;
        gameObject.GetComponent<Rigidbody>().AddForceAtPosition(collid, target);
    }
}
